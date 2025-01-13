import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map(value => (
                    <CharacterComponent item={value}>
                        {value.info}
                    </CharacterComponent>
                ))
            }
        </div>
    );
};
