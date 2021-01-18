import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Chairs',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/J%20collection/jcollection_desk_5.jpg',
                    id: 1,
                    linkUrl: 'shop/chairs'
                  },
                  {
                    title: 'Lounge chairs',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/The%20Spanish%20Collection/spanishcollectiondesktop8-min.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'Tables',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/Piloti/piloticol_desk_2.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'Dining',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/The%20Spanish%20Collection/spanishcollectiondesktop6-min.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'Leisure',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/calmo_7_ATC_1218x675px.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
            ]
        }
    }
    render() {
        return(
            <div className="directory-menu">
                {                
                this.state.sections.map(({title, id, imageUrl}) => <MenuItem key={id} title={title} imageUrl={imageUrl}/>)
                }
            </div>
        )
    }
}

export default Directory;