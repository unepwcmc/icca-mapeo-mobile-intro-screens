import React from 'react'
import { IntlShape, RawIntlProvider } from 'react-intl'
import { StyleSheet, ScrollView } from 'react-native'
import Markdown from './Markdown'

const InfoScreen = ({
  markdownText,
  intl,
}: {
  markdownText: string
  intl: IntlShape
}) => {
  return (
    <RawIntlProvider value={intl}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.inner}
        bounces
      >
        {Markdown(markdownText)}
      </ScrollView>
    </RawIntlProvider>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inner: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
})
