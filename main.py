import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import logging
logging.getLogger('tensorflow').setLevel(logging.ERROR)

from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences
import numpy as np
import tools
import os

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

model = load_model("test.h5")

chat=""

while True:
    print()
    chat += " " + input("> ") + " " + separator_token 

    response = ""
    print(response, end='', flush=True)
    while not response.endswith(separator_token):
        token_list = tokenizer.texts_to_sequences([chat])[0]
        token_list = pad_sequences(
            [token_list], maxlen=max_tokens)
        predicted = np.argmax(model.predict(token_list, verbose=0), axis=-1)
        output_word = ""
        for word, index in tokenizer.word_index.items():
            if index == predicted:
                output_word = word
                break
        chat += " " + output_word
        response += " " + output_word
        print('\r' + response.replace(separator_token, ""), end='', flush=True)
