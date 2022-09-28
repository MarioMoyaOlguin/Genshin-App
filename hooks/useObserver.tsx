

const cardsObserver = ( inactiveNavItem:string, activeNavItem:string, activeWidth:string, inactiveWidth:string ) => {

    if (typeof window !== 'undefined') {

        // animate projects
        const cards = document.querySelectorAll<HTMLDivElement>(".array-container");
        const navs = document.querySelectorAll<HTMLDivElement>(".nav");
        
        navs.forEach( (item, index) => {
            const num = index.toString();
            item.setAttribute('id', ('card-' + num));
            item.classList.add(inactiveNavItem)
        })

        const cardsArray = cards[0].children;

        const cardObserver = new IntersectionObserver( (entries) => {

            entries.forEach( (entry) => {

                if(entry.isIntersecting) {
                    navs.forEach( (item) => {

                        const navItem = item.style;
                        navItem.width = inactiveWidth
                        item.classList.replace(activeNavItem, inactiveNavItem)

                        if( item.id === entry.target.id ) {
                            navItem.width = activeWidth
                            item.classList.replace(inactiveNavItem, activeNavItem)
                        }
                    })
                }
            })
        }, {threshold: 0.8} );

        for (let index = 0; index < cardsArray.length; index++) {       
            const num = index.toString();

            cardsArray[index].setAttribute('id', ('card-' + num))

            cardObserver.observe(cardsArray[index]);
        }
    }
}

export default cardsObserver