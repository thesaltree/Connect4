import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Turn = ({ currentPlayer, isDisabled, isAI }) => {

  /*
    Props
    currentPlayer => Integer representing whose turn it is, i.e., player 1, player 2, or AI
    isDisabled => Boolean to enable or disable the Connect 4 game board. The board is disabled once the game is over
    isAI => Boolean representing whether the AI is playing or not. If false, it means player 2 is playing
  */

  const renderTurnInfo = () => {
    if (isDisabled) {
      if (currentPlayer === 0) {
        return <Text style={styles.turn}>It is a draw!</Text>;
      } else {
        if (isAI) {
          if (currentPlayer === 1) {
            return (
              <>
                <Text style={styles.turn}>Player {currentPlayer} </Text>
                <View style={[styles.turnDisc, { marginRight: wp(3) }]}></View>
                <Text style={styles.turn}>won!</Text>
              </>
            );
          } else {
            return (
              <>
                <Text style={styles.turn}>AI </Text>
                <View style={[styles.turnDisc, {backgroundColor: '#b11d22', marginRight: wp(3)}]}></View>
                <Text style={styles.turn}>won!</Text>
              </>
            );
          }
        } else {
          return (
            <>
              <Text style={styles.turn}>Player {currentPlayer} </Text>
              {currentPlayer === 1 ? (
                <View style={styles.turnDisc}></View>
              ) : (
                <View style={[styles.turnDisc, { backgroundColor: '#b11d22' }]}></View>
              )}
              <Text style={styles.turn}>won!</Text>
            </>
          );
        }
      }
    } else {
      return (
        <>
          <Text style={styles.turn}>
            {isAI && currentPlayer === 2 ? 'Turn: AI ' : `Turn: Player ${currentPlayer} `}
          </Text>
          {currentPlayer === 1 ? (
            <View style={styles.turnDisc}></View>
          ) : (
            <View style={[styles.turnDisc, { backgroundColor: '#b11d22' }]}></View>
          )}
        </>
      );
    }
  };
    

  return (
    <View style={styles.infoView}>
      { renderTurnInfo() }
    </View>
  );
};

const styles = StyleSheet.create({
  infoView: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: wp(6),
  },
  turn: {
    color: 'black',
    fontSize: wp(12),
    fontFamily: 'notoserif',
    fontWeight: '300',
  },
  turnDisc: {
    width: wp(12),
    height: hp(6),
    borderRadius: wp(15),
    backgroundColor: '#ccb002',
    marginTop: wp(2.5),
    marginRight: wp(5)
  },
});

export default Turn;