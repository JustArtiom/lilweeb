import numpy as np
from keras.preprocessing.text import Tokenizer


def read_train_data(fname: str) -> str:
    with open(fname, 'r', encoding='utf-8') as file:
        return file.read()


def fetch_train_data(train_data: str, separator_token: str) -> str:
    tdata = train_data.replace('\n', " "+separator_token+" ")
    tdata = tdata.replace('Human 1: ', '').replace('Human 2: ', '')
    return tdata


def create_tokenizer(train_data: str, oov: str) -> Tokenizer:
    tokenizer = Tokenizer(oov_token=oov)
    tokenizer.fit_on_texts([train_data])
    return tokenizer


def preprocess_sequences(train_data: list[int], max_tokens: int) -> tuple[list[int], list[int]]:
    X = []
    y = []

    for i in range(0, len(train_data) - max_tokens):
        from_index = i-max_tokens+1 if i-max_tokens+1 > 0 else 0
        input_sequence = train_data[from_index:i+1]
        output_sequence = train_data[i+1]

        X.append(input_sequence)
        y.append(output_sequence)

    return X, y


def one_hot_encoded(y: list[int], max_len: int) -> np.ndarray:
    one_hot = np.zeros((len(y), max_len), dtype=bool)

    for i, num in enumerate(y):
        one_hot[i][num] = True

    return one_hot
