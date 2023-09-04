import React, { Fragment } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import { MAP_JSON, STYLES_MAP } from "./constants";
//import ButtonContainer from "./components/ButtonContainer";
// import { formatNumberDecimal } from "./utils";
import ReactTooltip from "react-tooltip";
interface Params {
  props?: any;
}

export function ArgentineMap({ props }: Params) {
  const zoom = 2;
  const data = {
    map: MAP_JSON,
    width: 600,
    height: 500,
    center: [-62, -40],
    scale: 425,
    currency: "$",
  };

  //   handleZoomChange = (zoom: any) => this.setState({ zoom });
  //   handleZoomIn = () => this.handleZoomChange(this.state.zoom + ZOOMMAP);
  //   handleZoomOut = () => this.handleZoomChange(this.state.zoom - ZOOM);
  //   handleResetZoom = () => this.setState({ zoom: 2 });

  const ZOOMMAP = 0.5;

  const { width, height, center, scale, currency, map } = data;
  return (
    <Fragment>
      {/* <ButtonContainer
        handleResetZoom={this.handleResetZoom}
        handleZoomIn={this.handleZoomIn}
        handleZoomOut={this.handleZoomOut}
      /> */}
      <hr />
      <ComposableMap projectionConfig={{ scale }} width={width} height={height}>
        <ZoomableGroup zoom={zoom} center={center}>
          <Geographies geography={map}>
            {(geographies: any, projection: any) =>
              geographies.map((geography: any) => {
                const geographyValue = `${currency} ${geography.properties.VALUE}`;
                return (
                  <Geography
                    key={geography.properties.NAME}
                    data-tip={`${geography.properties.NAME} ${geographyValue}`}
                    geography={geography}
                    projection={projection}
                    precision={0.5}
                    style={{
                      default: STYLES_MAP.default,
                      hover: STYLES_MAP.hover,
                      pressed: STYLES_MAP.pressed,
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip />
    </Fragment>
  );
}

export default ArgentineMap;
