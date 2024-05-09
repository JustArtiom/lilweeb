# Training script v1.0.0

import numpy as np
import tensorflow as tf
from keras.models import Sequential
from keras.utils import to_categorical
from keras.layers import Input, LSTM, Dense, Embedding
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.callbacks import ModelCheckpoint
import json

train_file = 'conversation.txt'
out_of_vocam_token = '</OOV/>'
separator_token = '69un1qw0rd'  # A unique word to use as a separator
max_tokens = 128

save_path = "./models"
epochs = 25
batch_size = 128


# Read conversation file
with open(train_file, 'r', encoding='utf-8') as file:
    train_data = file.read()


# Change this depending on your training data
train_data = train_data.replace('\n', " "+separator_token+" ")
train_data = train_data.replace('Human 1: ', '')
train_data = train_data.replace('Human 2: ', '')
print('There are', len(train_data), "characters to train")


# Creating a tokenizer
tokenizer = Tokenizer(oov_token=out_of_vocam_token)
tokenizer.fit_on_texts(train_data.split(' '))
print('There are', len(tokenizer.word_index), "tokens in the dictionary")


# Creating training sequences
X = []  # previous words
y = []  # next word


# Generate input-output pairs with fixed sequence length
sequences = tokenizer.texts_to_sequences([train_data])[0]
for i in range(0, len(sequences) - max_tokens):
    from_index = i-max_tokens+1 if i-max_tokens+1 > 0 else 0
    input_sequence = sequences[from_index:i+1]
    output_sequence = sequences[i+1]
    X.append(input_sequence)
    y.append(output_sequence)


# Padding sequences
X = pad_sequences(X, maxlen=max_tokens, padding='pre')
y = np.array(y)

print("Shape of X after padding:", X.shape)
print("Shape of y after padding:", y.shape)


model = Sequential()
model.add(Input(shape=(max_tokens,)))
model.add(Embedding(len(tokenizer.word_index)+1, output_dim=128))
model.add(LSTM(256))
model.add(Dense(len(tokenizer.word_index), activation='softmax'))

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.summary()
checkpoint_callback = ModelCheckpoint(
    filepath=save_path+"/checkpoint.h5", save_weights_only=False, save_freq='epoch')

model.fit(X, y, epochs=epochs, batch_size=batch_size,
          callbacks=[checkpoint_callback])

model.save(save_path+'model.h5')
with open(save_path+"/tokensdict.json", 'w') as json_file:
    json.dump(tokenizer.index_word, json_file)

print("done")
