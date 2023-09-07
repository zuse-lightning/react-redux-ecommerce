import React, { Component } from "react";
import { Icon, Card, Image, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { addToCart } from "../../components/actions/cartActions";

class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <Grid.Column width={4} key={item.id}>
                    <Card>
                        <div id="card-img-container">
                            <Image src={item.img} alt={item.title} />
                            <Card.Header>{item.title}</Card.Header>
                            <Button onClick={() => {this.handleClick(item.id)}} to="/"><Icon name="plus" /> Add</Button>
                        </div>
                        <Card.Content>
                            <p>{item.desc}</p>
                            <p>Price: {item.price}</p>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            );
        });
        return (
            <>
                <Grid container>
                    <Grid.Row>
                        {itemList}
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);