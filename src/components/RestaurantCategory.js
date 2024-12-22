const RestaurantCategory = ({data}) =>{
    console.log("catetegory--->"+data);
    return (<div>
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        {/* <h3>hii</h3> */}
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
    </div>
    </div>
    );
}

export default RestaurantCategory;