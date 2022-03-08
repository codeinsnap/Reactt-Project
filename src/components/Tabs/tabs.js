import React from "react"
import { useState } from "react"
import './tabs.css'




function Tab() {

    const data = [
        {
            id: '1',
            tabTitle: "Tab 1",
            tabContent: ' content of the '
        },
        {
            id: '2',
            tabTitle: "Tab 2",
            tabContent: 'Tab Content 2'
        },
        {
            id: '3',
            tabTitle: "Tab 3",
            tabContent: 'Tab Content 3'
        }
    ]

    const [visibleTab, setVisibleTab] = useState(data[0].id)

    const listTitles = data.map((item) =>
        <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.tabTitle}</li>
    )

    const listContent = data.map((item) =>
        <p style={visibleTab === item.id ? {} : { display: 'none' }}> {item.tabContent} </p>

    )

    return (
        <div className="tabs">
            <ul className="tabs-titles">
                {listTitles}
            </ul>
            <div className="tab-content">
                {listContent}
            </div>
        </div>
    )
}


export default Tab