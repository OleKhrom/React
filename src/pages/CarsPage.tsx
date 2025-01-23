import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import {ICar} from "../models/ICar.ts";

export const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then( (cars:ICar[]) => {
            setCars(cars);
            console.log( 'CarsPage' );
        })
    }, []);

    return (
        <>
            {cars.map((car) => (
                <div key={car.id}>{car.id} - {car.brand}</div>
            ))}
        </>
    );
};