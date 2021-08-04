import React  from 'react'
import './index.css'
import { APP_LIST } from '../../constants'

class AppList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    generateAppItems() {
        let appItems = []
        APP_LIST.forEach(item => (
            appItems.push(
                <div key={item.name} className="app-item">
                    <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                    <div className="app-description">
                        {item.description}
                    </div>
                </div>
            )
        ))
        return appItems
    }

    render() {
        return (
        <div className="app-list">
            {this.generateAppItems()}
        </div>)
    }
}

export default AppList;