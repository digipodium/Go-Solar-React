import { useEffect, useState } from "react";
import app_config from "../../config";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
//import "../../stylesheets/browseplatform.css";
import Update from "./update";

const ManageEquipment = () => {
  const url = app_config.api_url;

  const [equipData, setEquipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchData = () => {
    fetch(url + 'equipment/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEquipData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "equipment/delete/" + id, { method: "DELETE" })
    .then((res) => {
      console.log(res.status);
      fetchData();
    });
  };

  const updateData = (form) => {
    setShowForm(true);
    setFormData(form);
  };

  const displayUpdateForm = () => {
    if (showForm) {
      return 
     <Update formdata={formData}></Update>;
    }
  };

  const displayOrg = () => {
    if (!loading) {
      return equipData.map((equipment) => (
        <tr>
          <td>{equipment.title}</td>
          <td>{equipment.description}</td>
          <td>
            <button
              onClick={(e) => deleteData(equipment._id)}
              className="btn btn-danger"
            >
              {/* <i class="fa fa-trash" aria-hidden="true"></i> */}
              < DeleteForeverIcon color="dark" />
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={updateData}>
              {/* <i class="fas fa-pen"></i> */}
              < EditIcon color="dark" />
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
     <div>
      <h1 className="text-center">Manage Organisation</h1>
      <hr />
      <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Title</th>
      <th>Description</th>
      {/* <th>Organisation Name</th> */}
    </tr>
  </thead>
  <tbody>
  </tbody>
  <tbody>{displayOrg()}</tbody>
</table>
      <div className="mt-5">{displayUpdateForm()}</div>
     </div>
  );
};

export default ManageEquipment;