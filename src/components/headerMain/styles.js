import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/color';

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  headerMain: {
    height: screenHeight * 0.064,
    backgroundColor: AppColors.YELLOW,
    flexDirection: 'row',
   
  },
  headerOne: {
  
    backgroundColor: 'white',
    height: screenHeight * 0.064,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: '#f3f2fd',
    borderLeftWidth: 2,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: '2%',
  },
  headerTwo: {
   // backgroundColor: 'red',
    height: screenHeight * 0.064,
    justifyContent: 'center',
     alignItems: 'center',
     width:"20%"
    
  },
});
export default styles;
