import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
}
  from "react-native";

import Title from './src/components/Title/Title';
import globalStyles from './src/components/globalStyles/globalStyles';
import UserStory from './src/components/UserStory/UserStory';
import UserPost from './src/components/UserPost/UserPost';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {

  const userStories = [
    {
      firstName: "Joseph",
      id: 1,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Daniel",
      id: 3,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Jeph",
      id: 4,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Natah",
      id: 5,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Nino",
      id: 6,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Max",
      id: 7,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Joseph",
      id: 8,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Bob",
      id: 9,
      profileImage: require('./src/assets/images/elipse.png')
    },

  ]

  const userPosts = [
    {
      firstName: 'Daniel',
      lastName: "França",
      location: 'João Pessoa, PB',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
      profileImage: require('./src/assets/images/elipse.png'),
      image: require('./src/assets/images/default_post.png'),

    },
    {
      firstName: 'Jennifer',
      lastName: "Wilkson",
      location: 'João Pessoa, PB',
      likes: 100,
      comments: 40,
      bookmarks: 3,
      id: 2,
      profileImage: require('./src/assets/images/elipse.png'),
      image: require('./src/assets/images/default_post.png'),

    },
    {
      firstName: 'Jaqueline',
      lastName: "Souto",
      location: 'Worcester, MA,',
      likes: 1209,
      comments: 90,
      bookmarks: 55,
      id: 3,
      profileImage: require('./src/assets/images/elipse.png'),
      image: require('./src/assets/images/default_post.png'),


    },
    {
      firstName: 'Nata',
      lastName: "Vacheishvili",
      location: 'New York, NY',
      likes: 110,
      comments: 12,
      bookmarks: 9,
      id: 4,
      profileImage: require('./src/assets/images/elipse.png'),
      image: require('./src/assets/images/default_post.png'),

    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      id: 5,
      profileImage: require('./src/assets/images/elipse.png'),
      image: require('./src/assets/images/default_post.png'),

    },
  ]


  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false)

  const userPostsPageSize = 5;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserSPosts, setIsLoadingUserPosts] = useState(false);


  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserStories(false);

  }, []);

  return (

    <SafeAreaView >
     <Icon name="rocket" size={30} color="#900" />
      <View style={globalStyles.header}>
        <Title title={"Let's Explore"} />

        <TouchableOpacity style={globalStyles.messageIcon}>
          <Image
            source={require('./src/assets/images/mail.png')}
            style={{ width: 25, height: 25 }}
          />



          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>
              2
            </Text>
          </View>

        </TouchableOpacity>

      </View>

      <View style={globalStyles.userStoryContainer}>

        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(
              userStories,
              userStoriesCurrentPage + 1,
              userStoriesPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesRenderedData}
          renderItem={({ item }) => (
            <UserStory
              key={'userStory' + item.id}
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>

      <View style={globalStyles.userPostContainer}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserSPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [
                ...prev,
                ...contentToAppend
              ]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              likes={item.likes}
              comments={item.bookmarks}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              location={item.location}

            />
          )} />
      </View>
    </SafeAreaView>
  )
}

export default App;
