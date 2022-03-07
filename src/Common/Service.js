
class Service {

    //Filter Shoes
    filterResult({ shoesData, bySearch, byCategory, bySize, bySort, priceRange }) {
        if (bySearch || byCategory?.length > 0 || bySize || bySort || priceRange) {

            let filterData = shoesData;

            if (bySearch) {
                filterData = filterData.filter(item => item.name.toLowerCase().includes(bySearch) || item.title.toLowerCase().includes(bySearch));
            }

            if (byCategory?.length > 0) {
                filterData = filterData.filter(item => byCategory?.includes(item.category));
            }

            if (bySize) {
                filterData = filterData.filter(item => item.avalSize?.includes(parseInt(bySize)));
            }


            if (bySort) {
                if (bySort == "sortByPrice") {
                    filterData = filterData.slice().sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? 1 : ((parseInt(b.price) > parseInt(a.price)) ? -1 : 0));
                } else {
                    filterData = filterData.slice().sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : (b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0);
                }
            }

            filterData = filterData.filter(item => parseInt(item.price) >= parseInt(priceRange?.min) && parseInt(item.price) <= parseInt(priceRange?.max));

            return filterData;
        } else {
            return shoesData;
        }
    }

}

const instance = new Service();

export default instance;
