import React from "react";
import { Route } from "react-router-dom";
import { useWebId } from "@inrupt/solid-react-components";
import PageNotFound from "../containers/pagenotfound/PageNotFound";

const PrivateLayout = (props) => {
    const webId = useWebId();
    const { component: Component, service, ...rest } = props;

    return (
        <Route
            {...rest}
            component={({ history, location, match, service, name }) => (
                <div>
                    {webId ? (
                        <div>
                            <Component {...{ history, location, match, service }} />
                        </div>
                    ) : (
                            <div>
                                <PageNotFound />
                            </div>
                        )}
                </div>
            )}
        />
    );
};

export default PrivateLayout;