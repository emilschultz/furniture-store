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
                    linkUrl: 'chairs'
                  },
                  {
                    title: 'Lounge chairs',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/The%20Spanish%20Collection/spanishcollectiondesktop8-min.jpg',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'Tables',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/Piloti/piloticol_desk_2.jpg',
                    id: 3,
                    linkUrl: ''
                  },
                  {
                    title: 'Dining',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/The%20Spanish%20Collection/spanishcollectiondesktop6-min.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                  },
                  {
                    title: 'Leisure',
                    imageUrl: 'https://www.fredericia.com/Files/Images/Collections_About_2019/calmo_7_ATC_1218x675px.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                  }
            ]
        }
    }
    render() {
        return(
            <div className="directory-menu">
                {                
                this.state.sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps} />))}
            </div>
        )
    }
}

export default Directory;