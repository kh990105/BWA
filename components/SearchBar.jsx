import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

const SearchBar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View>
        <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            onSelectItem={setSelectedItem}
            dataSet={[
                {id: '1', title: 'Alpha'},
                {id: '2', title: 'Beta'},
                {id: '3', title: 'Gamma'},
                {id: '4', title: 'View'},
                {id: '5', title: 'Blue'},
                {id: '6', title: 'Red'}
            ]}
        />
    </View>  
  )
}

export default SearchBar