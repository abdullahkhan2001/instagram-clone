import { USERS } from "./user";

export const POSTS =[
    {
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    user: USERS[0].user,
    likes: 7869,
    caption: 'Train Ride To Hogwards. ',
    profile_picture: USERS[0].image,
    comments:[
        {
            user: 'John',
            comment: 'Wow! This Would Look Fire',
        },
        {
            user: 'salena',
            comment: 'Once I Wake up, I am finally ready to ride',
        }
    ]
    },
    {
        imageUrl: 'https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?cs=srgb&dl=pexels-murtada-mustafa-7426864.jpg&fm=jpg',
        user: USERS[1].user,
        likes: 862,
        caption: 'Eating Biryani.',
        profile_picture: USERS[1].image,
        comments:[
            {
                user: 'Katty Parry',
                comment: 'Wow! It looks very yummy',
            },
            {
                user: 'Alina',
                comment: 'I can Taste It',
            }
        ]
        },


]