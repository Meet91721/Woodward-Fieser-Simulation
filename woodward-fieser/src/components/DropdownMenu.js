import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownMenu({selectedCompound}) {

  return (
    <DropdownButton id="dropdown-basic-button" className='button-text' size='lg' variant='light' title="Select a compound">
      <Dropdown.Item><p className='dropdown'><button onClick={() => selectedCompound(1)}>2,4-dimethylpenta-1,3-diene</button></p></Dropdown.Item>
      <Dropdown.Item><p className='dropdown'><button onClick={() => selectedCompound(2)}>1-methylcyclohexa-1,3-diene</button></p></Dropdown.Item>
      <Dropdown.Item><p className='dropdown'><button onClick={() => selectedCompound(3)}>3-methoxy-10-methyl-2,7,8,9,10,11,12,13,14,15,16,17-dodecahydro-1H-cyclopenta[a]phenanthrene</button></p></Dropdown.Item>
      <Dropdown.Item><p className='dropdown'><button onClick={() => selectedCompound(4)}>10,13-dimethyl-2,3,9,10,11,12,13,15,16,17-decahydro-1H-cyclopenta[a]phenanthrene</button></p></Dropdown.Item>
      <Dropdown.Item><p className='dropdown'><button onClick={() => selectedCompound(5)}>Heteroannular Diene</button></p></Dropdown.Item>
      <Dropdown.Item><p className='dropdown'><button onClick={() => selectedCompound(6)}>Cisoid Diene</button></p></Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenu;