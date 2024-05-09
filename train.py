# Training script v1.0.0
import tensorflow as tf
from keras.models import Sequential
from keras.layers import LSTM, Dense, Embedding
from keras.preprocessing.sequence import pad_sequences
import tools

train_file = 'conversation.txt'
oov_token = '</OOV/>'
separator_token = '69un1qw0rd'  # A unique word to use as a separator
max_tokens = 128

save_path = "./models"
epochs = 25
batch_size = 512

training_data = tools.read_train_data(train_file)
training_data = tools.fetch_train_data(training_data, separator_token)

tokenizer = tools.create_tokenizer(training_data, oov_token)
total_uniq_words = len(tokenizer.word_index)
sequenced_data = tokenizer.texts_to_sequences([training_data])[0]

X, y = tools.preprocess_sequences(sequenced_data, max_tokens)
X = pad_sequences(X, max_tokens)
y = tools.one_hot_encoded(y, total_uniq_words)

model = Sequential()
model.add(Embedding(total_uniq_words, output_dim=128, input_length=max_tokens))
model.add(LSTM(150))
model.add(Dense(total_uniq_words, activation='softmax'))
print(model.summary())

model.compile(loss='categorical_crossentropy',
              optimizer='adam', metrics=['accuracy'])

model.fit(X, y, epochs=epochs, batch_size=batch_size, verbose=1)
model.save("test.h5")
