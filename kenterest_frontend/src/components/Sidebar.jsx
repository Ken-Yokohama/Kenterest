import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Slider from "react-slick";

import logo from '../assets/logo.png';
import { categories } from '../utils/data';

// Changed px-5 to px-0
const isNotActiveStyle = 'flex items-center px-0 gap-3 text-grey-500 hover:text-black transition-all duration-200 ease-in-out capitalize font-extrabold decoration-white'
const isActiveStyle = 'flex items-center px-0 gap-3 font-extrabold border-r-2 md:border-l-2 border-black transition-all duration-200 ease-in-out capitalize underline md:decoration-white'


const Sidebar= ({ user, closeToggle }) => {
    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
    }

    const settings = {
        infinite: true,
        accessibility: false,
        draggable: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1424,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="flex flex-col md:flex-row justify-between bg-orange-200 h-full w-full overflow-y-scroll min-w-210 hide-scrollbar p-2 border-solid">
            {/* Container for Home & Categories */}
            <div className="flex flex-col md:flex-row md:bg-orange-200 justify-between" style={{width: "100%"}}>
                {/* Logo Left */}
                <Link
                    to="/"
                    className="flex px-5 gap-2 my-6 pt-1 w-190 md:w-300 items-center"
                    onClick={handleCloseSidebar}
                >
                    <img src={logo} alt="logo" className="w-full" />
                </Link>
                {/* Categories Desktop*/}
                <div className="hidden md:flex flex-col md:flex-row flex-wrap gap-5 md:gap-0 items-center" style={{ marginLeft: "10px", marginRight: "30px"}}>
                    <Slider {...settings} style={{width: "75vw"}}>
                        {categories.slice(0, categories.length - 1).map((category) => (
                            <NavLink
                                to={`/category/${category.name}`}
                                className={( {isActive} ) => isActive ? isActiveStyle : isNotActiveStyle}
                                onClick={handleCloseSidebar}
                                key={category.name}
                                style={{padding: "0"}}
                            >
                            <div style={{height:"100px", backgroundColor: "red", display: "flex", alignItems: "center", justifyContent: "space-around", background: `url(${category.image})`, backgroundSize: "cover"}}> 
                                {/* <img src={category.image} className="w-10 h-10 rounded-full shadow-sm" alt="category" /> */}
                                    <h1 className="font-sans text-2xl" style={{color: "black", WebkitTextFillColor: "white", WebkitTextStrokeWidth: "0.5px"}}>{category.name}</h1>
                            </div>
                            </NavLink>
                        ))}
                    </Slider>
                </div>
                {/* Categories Mobile*/}
                <div className="flex md:hidden flex-col gap-5">
                    <NavLink
                        to="/"
                        className={( {isActive} ) => isActive ? isActiveStyle : isNotActiveStyle}
                        onClick={handleCloseSidebar}
                    >
                    </NavLink>
                    <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover Categories</h3>
                    {categories.slice(0, categories.length - 1).map((category) => (
                        <NavLink
                            to={`/category/${category.name}`}
                            className={( {isActive} ) => isActive ? isActiveStyle : isNotActiveStyle}
                            onClick={handleCloseSidebar}
                            key={category.name}
                        >
                        <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" alt="category" />
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* Profile Upper Right */}
            <div className="flex md:hidden">
            {user && (
                <Link
                    to={`user-profile/${user._id}`}
                    className="flex my-5 md-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
                    onClick={handleCloseSidebar}
                >
                    <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile"/>
                    <p>{user.userName}</p>
                </Link>
            )}
            </div>
        </div>
    )
}

export default Sidebar;