import openai
import json


openai.api_key = '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'

def convert_text_to_json(text):
    data = {
        'text': text
    }

   
    json_data = json.dumps(data)

    return json_data

text_to_convert = "This is the text to convert."
json_output = convert_text_to_json(text_to_convert)
print(json_output)
