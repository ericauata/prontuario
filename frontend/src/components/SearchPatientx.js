import React from "react"
import Turnstone from "turnstone"
import { useNavigate } from "react-router-dom"

export default function SearchPatient() {

   const navigate = useNavigate()

   const listbox = {
      data: (query) =>
         fetch(`/api/search/patients?q=${encodeURIComponent(query)}&limit=10`)
            .then(res => res.json()),
      searchType: "contains",
      displayField: "fullName"
   }

   const defaultListbox = {
      data: () => fetch("/api/patients/popular").then(res => res.json()),
      displayField: "fullName",
   }

   const styles = {
      container: "",
      containerFocus: "",
      input: "w-full border border-gray-300 py-1 px-3 rounded-md text-md",
      inputFocus: "w-full border border-gray-300 border-b-0 outline-none py-1 px-3 rounded-t-md text-md text-gray-700",
      query: "",
      typeahead: "",
      cancelButton: "",
      clearButton: "absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center",
      listbox: "bg-white w-full border border-t-0 border-gray-300 shadow rounded-b-md pb-2 text-gray-700",
      noItems: "py-1 px-4 text-gray-500",
      errorbox: "",
      errorMessage: "",
      groupHeading: "",
      item: "py-1 px-4",
      highlightedItem: "py-1 px-4 bg-gray-200 cursor-pointer",
      match: ""
   }

   function handleChange(query) {
      // console.log(query)
   }

   function handleSelect(selectedItem, displayField) {
      selectedItem && navigate(`/patients/${selectedItem._id}/`)
   }

   return (
      <Turnstone
         autoFocus={false}
         cancelButton={false}
         clearButton={true}
         debounceWait={250}
         id="search-patient"
         listbox={listbox}
         listboxIsImmutable={true}
         matchText={true}
         maxItems="20"
         noItemsMessage="Não encontramos nenhum paciente com esse nome"
         placeholder="Digite o nome do paciente"
         styles={styles}
         onSelect={handleSelect}
         typeahead={true}
         defaultListbox={defaultListbox}
         onChange={handleChange}
      />
   )
}