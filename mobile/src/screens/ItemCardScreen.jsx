import { View, Text, Image, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BackArrowButton, LaundryButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';


const ItemCardScreen = ({ route }) => {
    const navigation = useNavigation();
    const image = route.params;
    const [itemInfo, setItemInfo] = useState()
    const [colour, setColour] = useState('');
    const [type, setType] = useState('');
    const [comments, setComments] = useState('');
    const [length, setLength] = useState('');
    const [material, setMaterial] = useState('');
    const [style, setStyle] = useState('');
    const [neckline, setNeckline] = useState('');
    const [sleeveLength, setSleeveLength] = useState('');
    const [straptype, setStraptype] = useState('');
    const [toe, setToe] = useState('');
    const [heelheight, setHeelheight] = useState('');
    const [season, setSeason] = useState('');
    const [others, setOthers] = useState('');
    const [laundry, setLaundry] = useState(false);

    const [newComment, setNewComment] = useState('');
    const [allComments, setAllComments] = useState([]);

    const handleCommentChange = (text) => {
        setNewComment(text);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setAllComments([...allComments, newComment]);
            setComments(newComment);
            setNewComment('');
        }
    };


    const fetchItem = async () => {
        try {
            const response = await axios.get(`${API_URL}/getItemfromurl?imageurl=${image}`, {
            });
            console.log(response.data);
            setItemInfo(response.data);
            setColour(response.data.colour);
            setType(response.data.type);
            setLength(response.data.length);
            setMaterial(response.data.material);
            setNeckline(response.data.neckline);
            setSleeveLength(response.data.sleeveLength);
            setSeason(response.data.season);
            setStraptype(response.data.straptype);
            setStyle(response.data.style);
            setToe(response.data.toe);
            setComments(response.data.comments);
            setOthers(response.data.others);
            setHeelheight(response.data.heelheight);
            setLaundry(response.data.laundry);
            console.log('successfully retrieved info');
        } catch (error) {
            console.error('Error fetching item info:', error);
        }
    };

    // Call fetchItems when the component mounts
    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.shadow} />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.itemInfoContainer}>
                {colour !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{colour}</Text>
                    </View>
                )}
                {type !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{type}</Text>
                    </View>
                )}
                {comments !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{comments}</Text>
                    </View>
                )}
                {length !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{length}</Text>
                    </View>
                )}
                {material !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{material}</Text>
                    </View>
                )}
                {style !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{style}</Text>
                    </View>
                )}
                {neckline !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{neckline}</Text>
                    </View>
                )}
                {sleeveLength !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{sleeveLength}</Text>
                    </View>
                )}
                {straptype !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{straptype}</Text>
                    </View>
                )}
                {toe !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{toe}</Text>
                    </View>
                )}
                {heelheight !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{heelheight}</Text>
                    </View>
                )}
                {season !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{season}</Text>
                    </View>
                )}
                {others !== '' && (
                    <View style={styles.itemInfoRow}>
                        <Text style={styles.itemInfoText}>{others}</Text>
                    </View>
                )}

            </View>
            <View style={styles.launderyRow}>
                    <Text style={styles.itemInfoLabel}>Laundry</Text>
                    <LaundryButton />
                </View>
            <View style={styles.commentsContainer}>
                <TextInput
                    style={styles.commentInput}
                    placeholder={"Add a comment..."}
                    placeholderTextColor='#937CA7'
                    value={newComment}
                    onChangeText={handleCommentChange}
                    onSubmitEditing={handleAddComment}
                />
                <FlatList
                    data={allComments}
                    renderItem={({ item }) => (
                        <View style={styles.commentRow}>
                            <Text style={styles.commentText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.arrow}>
                <BackArrowButton navigation={navigation} screenName={'ClosetScreen'} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    arrow: {
        bottom: 710,
        left: 30
    },
    commentsContainer: {
        padding: 16,
    },
    commentInput: {
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 25,
        backgroundColor: "#D8BFD8",
        marginBottom: 16,
    },
    commentRow: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 8,
    },
    commentText: {
        fontSize: 16,
        fontFamily: 'CabinCondensed-Regular',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    imageContainer: {
    },
    image: {
        height: 400,
        width: Dimensions.get('window').width,
    },
    shadow: {
        position: 'absolute',
        bottom: 400,
        left: 0,
        right: 0,
        height: 100, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    itemInfoContainer: {
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: 20,
        bottom: 20
    },
    itemInfoRow: {
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#937CA7',
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 35,
        marginRight: 15,
        marginBottom: 10
    },
    itemInfoText: {
        fontSize: 18,
        fontFamily: 'CabinCondensed-Regular',
        marginBottom: 8,
        color: '#FFFFFF',
    },
    launderyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 30
    },
    itemInfoLabel: {
        fontSize: 20,
        fontFamily: 'CabinCondensed-Regular',
        fontWeight: 'bold',
        marginRight: 8,
    },
    laundrytext: {
        fontSize: 16,
        fontFamily: 'CabinCondensed-Regular',
        marginBottom: 8,
    },
})

export default ItemCardScreen