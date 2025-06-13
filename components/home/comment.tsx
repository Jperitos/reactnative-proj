import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Comment = {
  id: string;
  username: string;
  avatar: string;
  text: string;
  time: string;
  liked: boolean;
  likes: number; // <-- New
};

const initialComments: Comment[] = [
  {
    id: "1",
    username: "sneakerhead_21",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "These shoes are 🔥🔥🔥",
    time: "2 hours ago",
    liked: false,
    likes: 12,
  },
  {
    id: "2",
    username: "jennywalks",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "I got them last week, super comfy!",
    time: "5 hours ago",
    liked: false,
    likes: 12,
  },
  {
    id: "3",
    username: "king_kicks",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Definitely worth the price.",
    time: "8 hours ago",
    liked: false,
     likes: 12,
  },
  {
    id: "4",
    username: "emilyt",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Love the pastel color options 😍",
    time: "10 hours ago",
    liked: false,
     likes: 12,
  },
  {
    id: "5",
    username: "markyd",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "Best shoes for gym sessions 💪",
    time: "12 hours ago",
    liked: false,
     likes: 12,
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const toggleLike = (id: string) => {
  const updated = comments.map((comment) =>
    comment.id === id
      ? {
          ...comment,
          liked: !comment.liked,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
        }
      : comment
  );
  setComments(updated);
};


  const renderItem = ({ item }: { item: Comment }) => (
    <View style={styles.commentCard}>
      <View style={styles.row}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.username}>{item.username}</Text>
            <View style={styles.likeContainer}>
            <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.likeButton}>
                <FontAwesome
                name={item.liked ? "heart" : "heart-o"}
                size={18} 
                color={item.liked ? "red" : "#999"}
                />
            </TouchableOpacity>
            <Text style={styles.likeCount}>{item.likes}</Text>
            </View>
          </View>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={comments}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default CommentSection;

const styles = StyleSheet.create({
  commentCard: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 5,
    elevation: 2,
  },
  likeContainer: {
  flexDirection: "column",
  marginTop: 10,
  alignItems: "center",
},
likeCount: {
  fontSize: 10,
  color: "#444",
  marginLeft: 4,
},
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginTop: 10,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
    color: "#222",
  },
  time: {
    fontSize: 11,
    color: "#999",
    marginTop: 4,
  },
  text: {
    fontSize: 14,
    color: "#444",
    marginTop: 2,
  },
  likeButton: {
    paddingLeft: 5,
  },
});
