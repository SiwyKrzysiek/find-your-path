import React from "react";

export default function Navigation(props) {
    return (
        <div className="card col-3 navigation">
            <div className="card-body">
                <h5 className="card-title">Next place</h5>

                <ul class="nav nav-pills flex-column">
                    {React.Children.map(props.children, (child, i) => (
                        <li className="nav-item">
                            {child}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}