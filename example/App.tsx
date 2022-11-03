//TODO: see if this can be removed - currently needed to run on android via expo go
//TODO: also remove from package.json if not needed
import 'intl'
import 'intl/locale-data/jsonp/en'
import 'intl/locale-data/jsonp/de'

import React from 'react'
import { createIntl, createIntlCache } from 'react-intl'
import {
  createStackNavigator,
  createAppContainer,
  NavigationScreenProps,
} from 'react-navigation'
import { Alert } from 'react-native'

import {
  IntroPager,
  IntroInfo,
} from '@unep-wcmc/icca-mapeo-mobile-intro-screens'

import { HeaderTitle } from 'react-navigation-stack'
import { StatusBar } from 'react-native'
import { useNavigationParam } from 'react-navigation-hooks'

import messages from './translations/messages.json'

const cache = createIntlCache()

const locale = 'de'

const intl = createIntl(
  {
    locale: locale,
    messages: messages[locale],
  },
  cache
)

const InfoHeaderTitle = () => {
  const title = useNavigationParam('introInfoTitle')
  return <HeaderTitle>{title}</HeaderTitle>
}

const Info = ({ navigation }: NavigationScreenProps) => {
  const text = navigation.getParam('introInfoText')

  return (
    <>
      <StatusBar hidden={false} />
      <IntroInfo intl={intl} markdownText={text} />
    </>
  )
}

Info.navigationOptions = {
  headerTitle: InfoHeaderTitle,
}

const Intro = ({ navigation }: NavigationScreenProps) => {
  const handleShowInfo = React.useCallback(
    ({ title, text }) => {
      navigation.navigate('Info', {
        introInfoTitle: title,
        introInfoText: text,
      })
    },
    [navigation]
  )
  const handlePressComplete = React.useCallback(() => {
    Alert.alert(
      'Navigate to app',
      'In the full app this would now navigate to the main map screen of the app',
      [{ text: 'OK', onPress: () => {} }]
    )
  }, [])
  return (
    <>
      <StatusBar hidden />
      <IntroPager
        intl={intl}
        onShowInfo={handleShowInfo}
        onPressComplete={handlePressComplete}
      />
    </>
  )
}

Intro.navigationOptions = {
  header: null,
}

const IntroStack = createStackNavigator(
  {
    Intro,
    Info,
  },
  { mode: 'modal' }
)

export default createAppContainer(IntroStack)
