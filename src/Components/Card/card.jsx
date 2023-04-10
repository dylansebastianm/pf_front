import { useSelector, useDispatch } from "react-redux";
import { postFavorites, addItemToChart, deleteFavorites, deleteChart, getFavorites, getChart } from "../../Redux/Actions/Index";
import React, { useEffect, useState } from "react";
import { Card } from 'antd';
import "../Card/card.css"
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";


const { Meta } = Card;

const imgProvisoria = require("../Assets/god-of-war-ragnarok-ps5-retro.jpg")



function CardElement({ title, imgProvisoria, description, price, descriptionComplete, id, quantity }) {

  const allFavorites = useSelector(state => state.allFavorites);
  const shoppingChart = useSelector(state => state.shoppingChart);
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.allUsers);

  const [shoppingStringified, setShoppingStringified] = useState([]);
  const [favsStringified, setFavsStringified] = useState([]);

  const [string, setString] = useState("hola");

  const cookie = new Cookies();
  const idCoockie = cookie.get("id");
  console.log(idCoockie);


  useEffect(() => {

    dispatch(getFavorites(idCoockie));
    dispatch(getChart(idCoockie));

  }, [dispatch]);


  const navigate = useNavigate();


  const handleFavorites = (id) => {

    const product_id = id;
    const putFavorite = {
      userId: idCoockie,
      products:
      {
        id: product_id,
        quantity: 1
      }

    }

    dispatch(postFavorites(putFavorite));

  };

  const handleFavoritesDelete = (id) => {

    const product_id = id;
    const deleteFavorite = {
      userId: idCoockie,
      gameId: product_id
    }

    dispatch(deleteFavorites(deleteFavorite));

  };

  const handleShoppingChart = (id) => {

    const product_id = id;
    const put = {
      userId: idCoockie,
      products:
      {
        id: product_id,
        quantity: 1
      }

    }

    dispatch(addItemToChart(put));

  };

  const onClickDelete = (id) => {

    let payload = {
      userId: idCoockie,
      gameId: id
    }

    dispatch(deleteChart(payload));

  };

  var precio = `$ ${price}`;

  if (shoppingChart || allFavorites) {
    return (
      <div className="card-component">
        <Card
          onClick={(e) => {
            e.target.tagName !== 'svg' && e.target.tagName !== 'path' && navigate(`/game/${id}`)
          }}
          hoverable
          style={{
            width: 180,
          }}
          cover={<img alt="example" src={imgProvisoria} className="img-card-home" />}
        >
          <Meta
            title={title}
            description={precio}
          />
          <br></br>
          <div className='iconsCardHomeContainer'>
            {allFavorites.products?.map((game) => {
              if (game.id === id) {
                return (
                  <AiFillHeart
                    onClick={() => handleFavoritesDelete(id)}
                    className='favIconCardHome' />
                )
              }
            })}
            {shoppingChart.products?.map((game) => {
              if (game.id === id) {
                return (
                  <RiShoppingCartFill
                    onClick={() => onClickDelete(id)}
                    className='favIconCardHome' />
                )
              }
            })}
          </div>
          <div className='iconsCardHomeContainer'>
            {!allFavorites.products || allFavorites.products.length === 0 ?
              <AiOutlineHeart
                className='favIconCardHome'
                onClick={() => {
                  handleFavorites(id)
                }} />
              :
              <AiOutlineHeart
                className='favIconCardHome'
                onClick={() => {
                  handleFavorites(id)
                }} />
            }
            {!shoppingChart.products || shoppingChart.products.length === 0 ?
              <RiShoppingCartLine
                className='favIconCardHome'
                onClick={() => handleShoppingChart(id, quantity)} />
              :
              <RiShoppingCartLine
                className='favIconCardHome'
                onClick={() => handleShoppingChart(id, quantity)} />
            }
          </div>
        </Card>
      </div>
    )
  }

};

export { CardElement };