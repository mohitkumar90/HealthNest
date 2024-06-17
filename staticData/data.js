export const posts = [
    {
      id: 1,
      profileImage: 'https://picsum.photos/200',
      name: 'rohit.shetty12',
      time: '1min',
      content: 'I’ve been facing a few possibble symptoms of skin cancer. I’ve googled the possibilities but i thought i’d ask the community inste...See More',
      category: 'DIET',
      question: 'What are the signs and symptoms of skin cancer?',
      status: 'asked a question',
      recent: 'Diagnosed Recently',
      likes: 15,
      events: null,
      location: 'Peninsula Park, Andheri, Mumbai',
      postImage: null,
      comments: [
        { 
            id: 1,
            profileImage: 'https://picsum.photos/200',
            name: 'John Doe',
            time: '10 minutes ago',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            category: 'diet',
            recent: 'Diagnosed Recently',
            likes: '',
            dislikes: '',
            reply: [],
            myComment: false,
        },
        { 
            id: 2,
            profileImage: 'https://picsum.photos/200',
            name: 'John Doe',
            time: '10 minutes ago',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            category: 'diet',
            recent: 'Diagnosed Recently',
            likes: '',
            dislikes: '',
            reply: [],
            myComment: true
        },
      ],
    },
    {
      id: 2,
      profileImage: 'https://picsum.photos/200/300',
      name: 'priya321',
      time: '2min',
      status: '',
      recent: 'created an event',
      category: 'LIFESTYLE',
      content: 'My husband has his 3 days transplant assessment in Newcastle next month, strange mix of emotions. For those that have been through this how long did it take following assessment was it until you were t... See More',
      location: 'Peninsula Park, Andheri, Mumbai',
      likes: 25,
      events: {
        eventName: 'Cancer meet at Rajeev Gandhi National Park',
        eventDate: 'Tue, apr 23, 2019 | 7 pm IST',
        eventLocation: 'Rajeev gandhi national park, mumbai',
        numberOfpeopleAttending: '21'

      },
      comments: [
        { 
            id: 1,
            profileImage: 'https://picsum.photos/200',
            name: 'John Doe',
            time: '10 minutes ago',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            category: 'diet',
            likes: '',
            dislikes: '',
            reply: []
        },
        { 
            id: 2,
            profileImage: 'https://picsum.photos/200',
            name: 'John Doe',
            time: '10 minutes ago',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            category: 'diet',
            likes: '',
            dislikes: '',
            reply: []
        },
      ],
    },
    {
        "id": 2,
        "profileImage": "https://picsum.photos/201",
        "name": "jane.doe23",
        "time": "2min",
        "content": "Has anyone tried the new keto diet? I’m thinking of giving it a shot.",
        "category": "FITNESS",
        "question": "Is keto diet effective for weight loss?",
        "status": "asked a question",
        "recent": "Started Dieting",
        "likes": 20,
        "events": null,
        "location": "Gym, Bandra, Mumbai",
        "postImage": null,
        pollResult: {},
        "comments": [
          {
            "id": 1,
            "profileImage": "https://picsum.photos/201",
            "name": "Rahul Sharma",
            "time": "15 minutes ago",
            "content": "I’ve been on keto for 2 months, it’s been a game changer for me.",
            "category": "fitness",
            "likes": "",
            "dislikes": "",
            "reply": []
          },
          {
            "id": 2,
            "profileImage": "https://picsum.photos/201",
            "name": "Priya Patel",
            "time": "10 minutes ago",
            "content": "I’ve heard it’s not sustainable in the long run, what’s your take?",
            "category": "fitness",
            "likes": "",
            "dislikes": "",
            "reply": []
          }
        ]
      },
      {
        "id": 3,
        "profileImage": "https://picsum.photos/202",
        "name": "rahul.sharma90",
        "time": "3min",
        "content": "Just got diagnosed with diabetes, anyone have any advice on managing it?",
        "category": "HEALTH",
        "question": "How to manage diabetes?",
        "status": "asked a question",
        "recent": "Diagnosed Recently",
        "likes": 12,
        "events": null,
        "location": "Lilavati Hospital, Bandra, Mumbai",
        "postImage": "https://picsum.photos/202",
        "comments": [
          {
            "id": 1,
            "profileImage": "https://picsum.photos/202",
            "name": "Dr. Smith",
            "time": "20 minutes ago",
            "content": "I’m a doctor, I can offer some advice. DM me!",
            "category": "health",
            "likes": "",
            "dislikes": "",
            "reply": []
          },
          {
            "id": 2,
            "profileImage": "https://picsum.photos/202",
            "name": "Rajesh Patel",
            "time": "15 minutes ago",
            "content": "I’ve been living with diabetes for 5 years, happy to share my experience.",
            "category": "health",
            "likes": "",
            "dislikes": "",
            "reply": []
          }
        ]
      }
  ];
