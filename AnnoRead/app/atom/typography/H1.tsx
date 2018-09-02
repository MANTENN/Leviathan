import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';

export interface Props {
    children: Object,
    bold?: boolean
}

export default class H1 extends Component<Props> {
    render() {
        let {children, bold} = this.props;
        const styles = StyleSheet.create({
            h1: {
                fontWeight: bold ? 'bold' : null,
                fontSize: 28,
                marginTop: 10,
                marginBottom: 20
            }
        })
        return (
            <Text {...this.props} style={styles.h1}>
                {children}
            </Text>
        );
    }
}