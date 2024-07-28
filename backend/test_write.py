import os

data_directory = 'data'
test_file_path = os.path.join(data_directory, 'test_write.txt')

try:
    with open(test_file_path, 'w') as f:
        f.write('This is a test.')
    print('Write test succeeded.')
except Exception as e:
    print(f'Write test failed: {e}')
