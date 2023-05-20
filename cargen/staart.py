import openai
import requests
import matplotlib.pyplot as plt


openai.api_key = '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'

def generate_car_outline():
   
    prompt = "Car outline"

    
    response = openai.Completion.create(
        engine='davinci',
        prompt=prompt,
        max_tokens=50,
        temperature=0.7,
        top_p=1.0,
        n=1,
        stop=None
    )


    image_url = response.choices[0].image


    image_data = requests.get(image_url).content


    image_path = 'car_outline.png'
    with open(image_path, 'wb') as image_file:
        image_file.write(image_data)

    return image_path


car_outline_path = generate_car_outline()
car_outline_image = plt.imread(car_outline_path)
plt.imshow(car_outline_image)
plt.axis('off')
plt.show()
