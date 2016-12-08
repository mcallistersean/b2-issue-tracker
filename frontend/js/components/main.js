import React from 'react'
import Map , {CloseMapButton} from './map'
import NewIssue from './newIssue'
import MediaQuery from 'react-responsive'
import Icon from 'react-fa'
import {mediumSize} from './responsive'

require('../../css/app.css');

function WrapMap(props) {
    let { closable, onClose } = props;
    // construct the map
    let map = <Map geojson={props.geojson}
                   bounds={props.bounds}
                   visibleIssueIDs={props.issues.map(i => i.id)}
                   setCoordinates={props.setCoordinates}
                   coordinates={props.coordinates}
                   selectIssue={props.selectIssue}
                   selectedIssue={props.selectedIssue} />;
    return  <div className="map-container">
        {map}
        {closable ? <footer className="bg-primary">
            <div className="btn btn-primary btn-block text-center" onClick={onClose}>
                <Icon name="times" />&nbsp;
                Close Map
            </div>
        </footer> : null}
    </div>;
}


class UI extends React.Component {

    state = {
        displayMap: false
    }

    toggleMapDisplay = () => {
        this.setState({
            displayMap: !this.state.displayMap
        })
    }

    render() {

        return (<MediaQuery maxWidth={992}>
                {(isMobile) => {
                    // default: display both
                    let displayMap = true,
                        displayIssues = true;

                    // on mobile display one or the other,
                    // depending on state
                    if (isMobile) {
                        if (this.state.displayMap) {
                            displayIssues = false;
                        } else {
                            displayMap = false;
                        }
                    }

                    return (<div className="app-container">
                        {
                            displayMap ?
                                <WrapMap {...this.props } closable={!displayIssues} onClose={this.toggleMapDisplay}/>
                                : null
                        }
                        {
                            displayIssues ?
                                <div className="issues-container">
                                    {
                                        this.props.coordinates === null ?
                                            null:
                                            <NewIssue coordinates={this.props.coordinates} removeAction={this.props.clearCoordinates} />
                                    }

                                    {
                                        React.cloneElement(
                                            this.props.children,
                                            {
                                                mapOpenable: !displayMap,
                                                openMap: this.toggleMapDisplay
                                            }
                                        )
                                    }
                                </div> :
                                null
                        }
                    </div>)
                }}
        </MediaQuery>);
    }
}

export default UI
