import Realm from "realm";
import { OrderChamados } from "./schemas/OrderChamados";

export const getRealm = async() => await Realm.open({
    path: "chamados-app",
    schema: [OrderChamados],
  });