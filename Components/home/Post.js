import React from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'



const postFooterIcons=[
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/ios/2x/like.png',
        likedImageUrl: 'https://img.icons8.com/color/2x/like--v3.gif',
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/external-comment-chat-flatart-icons-outline-flatarticons-2.png',
        
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-paper-plane-interface-kiranshastry-lineal-kiranshastry.png',
        
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/ios/2x/bookmark-ribbon.png',
        
    },
]




const Post = ({post}) => {
    return (
        <View style={{marginBottom: 10, flex: 1}} >
         <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  }}
/>
         <PostHeader post={post} />
         <PostImage post={post}/>
         <View style={{marginHorizontal: 15, marginTop: 10}}>
         <PostFooter />
         <Likes post={post}/>
         <Caption post={post} />
         <CommentSection post={post} />
         <Comments post={post} />
         </View>
         
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    }}>
     <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <Image source={{uri: post.profile_picture}} style={styles.story} />
         <Text style={{marginLeft: 5, fontWeight: '700'}} >{post.user}</Text>
     </View>
     <Text style={{fontWeight: 'bold'}}>...</Text>
    </View>
)

const PostImage =({post}) => (
    <View style={{width: '100%', height: 400}}>
        <Image 
        source={{uri: post.imageUrl}}
        style={{height: '100%', resizeMode: 'cover'}}/>
    </View>
)
const PostFooter = () => (
    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <View style={styles.leftFooterIconContainer}>
            <Icon imgStyle={styles.FooterIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.FooterIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.FooterIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <View>
        <Icon imgStyle={styles.FooterIcon} imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}}/>
    </TouchableOpacity>
)

const Likes = ({post}) => (
    <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{fontWeight: '600'}}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)
const Caption =({post}) => (
    <View style= {{marginTop: 5}}>
        <Text>
            <Text style={{fontWeight: 'bold'}}>{post.user}</Text>
            <Text>  {post.caption}</Text>
        </Text>
    </View>
)

const CommentSection =({post}) => (
    <View style={{marginTop: 5}}>
        {!!post.comments.length && (
            <Text style= {{color: 'gray'}}>
             View{' '}{post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
             {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
)


const Comments = ({post}) => (
    <> 
    {post.comments.map((comment, index) => (
        <View key={index} style={{flexDirection: 'row' , marginTop: 5}}>
            <Text>
                <Text style={{fontWeight: 'bold'}}>{comment.user}</Text>{' '}
                {comment.comment}
            </Text>
        </View>
    ))}
    </>
)
const styles = StyleSheet.create({
   
   story: {
     width: 35,
     height: 35,
     borderRadius: 50,
     marginLeft: 6,
     borderWidth: 1.9,
     borderColor: '#ff8501',
   },
   FooterIcon: {
       width: 26,
       height: 26,
       
       
   },
   leftFooterIconContainer: {
       flexDirection: 'row',
       width: '32%',
       justifyContent: 'space-between',
   }
  });

export default Post
