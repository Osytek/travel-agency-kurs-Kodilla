import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

class OrderOptionCheckboxes extends React.Component {
  render(){
    console.log(this.props,'props');
    const {values, setOptionValue, currentValue} = this.props;
    return(
      <div className={styles.checkboxes}>
        {values.map(value => (
          <label key={value.id}>
            <input
              type="checkbox"
              value={value.id}
              onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
            />
            {value.name}  ({formatPrice(value.price)})
          </label>
        ))}
      </div>
    );
  }
}
OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;