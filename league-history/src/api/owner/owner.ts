import { Standings } from "../standings/standings"

export interface Owner {
    id?: string
    name?: string
    team?: string
    years?: string[]
    standings?: Standings[]
}