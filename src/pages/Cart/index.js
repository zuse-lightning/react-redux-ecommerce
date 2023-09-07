import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header, List, Image, Icon, Button, Grid } from "semantic-ui-react";
import { removeItem, addQuantity, subtractQuantity } from "../../components/actions/cartActions";

class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <>
                            <List.Item className="collection-item-avatar" key={item.id}>
                                <div className="item-img">
                                    <Image src={item.img} alt={item.img} />
                                </div>
                                <List.Description className="item-desc">
                                    <Header as="h4" className="title">{item.title}</Header>
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price}</b></p>
                                    <p><b>Quantity: {item.quantity}</b></p>
                                    <div className="add-remove">
                                        <Link to="/cart"><Icon onClick={() => this.handleAddQuantity(item.id)} name="arrow up" /></Link>
                                        <Link to="/cart"><Icon onClick={() => this.handleSubtractQuantity(item.id)} name="arrow down" /></Link>
                                    </div>
                                    <Button onClick={() => this.handleRemove(item.id)} color="red" className="remove">Remove</Button>
                                </List.Description>
                            </List.Item>
                        </>
                    );
                })
            ) : (
                <p>Nothing to see here.</p>
            );

        return (
            <Grid container>
                <div className="cart">
                    <Header as="h5">Cart</Header>
                </div>
                <List className="collection">
                    {addedItems}
                </List>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);