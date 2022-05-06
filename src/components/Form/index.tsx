import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { theme } from '../../theme';
import { FeedbackType } from "../../components/Widget"
import { ScreenshotButton } from "../../components/ScreenshotButton"
import { styles } from './styles';
import { feedbackTypes } from "../../utils/feedbackTypes"

interface Props {
    feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
    const feedbackInfo = feedbackTypes[feedbackType]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackInfo.image}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput 
                multiline
                style={styles.input}
                placeholder="sdfgsfgsdfgsdfgsdfgsdfgsfgsdfgsdfgsdfgsdfgsdfgdfgdsfg"
                placeholderTextColor={theme.colors.text_secondary}
            />

            <View style={styles.footer}>
                <ScreenshotButton 
                    onTakeShot={() => {}}
                    onRemoveShot={() => {}}
                    screenshot="teste"
                />
            </View>
        </View>
    );
}