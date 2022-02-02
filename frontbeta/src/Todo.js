import React, { Component } from 'react';
import{ListItem,ListItemText,InputBase,Checkbox,ListItemSecondaryAction,IconButton}from "@material-ui/core"
import DeleteOutline from "@material-ui/icons/DeleteOutline"

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={item:props.item};
    }

    render() {
        const item =this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id} //각리스트의 구분을 위해서 id연결
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullwidth={true}
                        />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo">
                        <DeleteOutline/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            
        );
    }
}

export default Todo;