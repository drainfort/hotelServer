import Hotel from "../../models/hotel.model";

export default interface HotelDao {

    /**
     * Create an array of hotels in a database
     * @param hotels Array of hotels
     */
    createAll(hotels:Array<Hotel>): Promise<Boolean>;

    /**
     * Create new hotel in database
     * @param hotel New hotel
     */
    create(hotel: Hotel): Promise<Boolean>;

    /**
     * Update infomation of a hotel in database
     * @param hotel Hotel to be updated
     */
    update(hotel: Hotel): Promise<Boolean>;

    /**
     * Delete a hotel by its id
     * @param id Id of the hotel that wants to be deleted
     */
    delete(id: number): Promise<Boolean>;

    /**
     * Retrieve inforamtion of a hotel by its id
     * @param id Id of the hotel
     */
    get(id: string): Promise<Array<Hotel>>;

    /**
     * Get all hotels
     */
    getAll(): Promise<Array<Hotel>>;
}