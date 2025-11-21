import { TableRepository } from "../../repository/TableRepository";
import { RegisterTableService } from "../register/RegisterTableService";

export function makeRegisterTableService() {

    const repository = new TableRepository()

    const registerTableService = new RegisterTableService(repository)

    return registerTableService

}