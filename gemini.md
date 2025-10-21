One of the things i thought would be good to have in our Segen motors website is a chatbot. So i have created a chatbot in the component/ChatWidget.tsx file. Also there is a dedicated page for chating wITH the AI app/chat/page.tsx available in the app/layout you can just dive right in and chat with the AI ABOUT ANY CAR or such things.

Now the AI itself is using gemini api to communicate with it or make api calls really our chatbot is one of Google's gemini model. The gemini api key is in the file .env.local file in the root directory.

But now the problem is that am encountering errors when i try to text the chatbot .Here is the errors. Successfully loaded image: /cars/nissannote.jpeg
layout-b9f13f48f6072ff5.js:1  POST https://www.segenmotors.com/api/chat 500 (Internal Server Error)
h @ layout-b9f13f48f6072ff5.js:1
onKeyPress @ layout-b9f13f48f6072ff5.js:1
i4 @ 4bd1b696-cf72ae8a39fa05aa.js:1
(anonymous) @ 4bd1b696-cf72ae8a39fa05aa.js:1
nz @ 4bd1b696-cf72ae8a39fa05aa.js:1
se @ 4bd1b696-cf72ae8a39fa05aa.js:1
cs @ 4bd1b696-cf72ae8a39fa05aa.js:1
cu @ 4bd1b696-cf72ae8a39fa05aa.js:1Understand this error
layout-b9f13f48f6072ff5.js:1 Error sending message: Error: HTTP error! status: 500
    at h (layout-b9f13f48f6072ff5.js:1:1891)

Also check image.png in the public/cars which is a screenshot for the error in my browser console.

Also when i visit app/chat/page.tsx file i see the error 404 page not found which doesn't make sense because i have a file there and with code in it.