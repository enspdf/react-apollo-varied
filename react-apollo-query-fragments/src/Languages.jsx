import React from "react";
import { gql } from "apollo-boost";

const LANGUAGE_FRAGMENT = gql`
    fragment LanguageFragment on Repository {
        languages(first: 5) {
                nodes {
                    id
                    name
                }
            }
    }
`;

function Languages({ repository }) {
    return (
        <div>
            <pre>{JSON.stringify(repository, null, 2)}</pre>
            <ul>
                {repository.languages.nodes.map(language => (
                    <li key={language.id}>{language.name}</li>
                ))}
            </ul>
        </div>
    );
};

Languages.fragments = {
    repository: LANGUAGE_FRAGMENT
};

export { Languages };