import {Platform, TextStyle, ViewStyle} from 'react-native';

const REM = 16;
const FONTSIZE_RATIO = 1;
const LINEHEIGHT_RATIO = 1.3;

const colors = {
  main: ['#aabbcc', '#aabbff'],
  black: ['#222', '#444'],
  gray: ['#666'],
  borderLight: '#eaeaea',
  shadowGray: '#ddd',
  // FIXME: ADD MORE
};

const makeFont = (size: number, weight: string, color: string = '#000') => {
  return {
    fontSize: size * FONTSIZE_RATIO,
    lineHeight: size * FONTSIZE_RATIO * LINEHEIGHT_RATIO,
    fontWeight: weight,
    color,
  } as TextStyle;
};

export const theme = {
  rem: REM,
  color: colors,
  box: {
    rowCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    rowBetweenCenter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    } as ViewStyle,
    rowStartCenter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    } as ViewStyle,
  },
  text: {
    label: {
      main: makeFont(0.9 * REM, '500', colors.black[0]),
    },
    title: {
      header: makeFont(1.1 * REM, '500', colors.black[0]),
    },
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  height: {
    header: 53,
  },
  shadow: {
    main: Platform.select({
      android: {elevation: 3},
      ios: {
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowColor: colors.shadowGray,
      },
    }),
  },
  makeFont,
};
