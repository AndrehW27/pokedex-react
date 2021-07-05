const openMenu = () => {
    if (menuOpen === false) {
      document.getElementById("genContId").classList.remove("hide");
   
      document.getElementById("gen1boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen2boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen3boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen4boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen5boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen6boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen7boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen8boxid").classList.remove("slideGenClassUp");
      document.getElementById("gen1boxid").classList.add("slideGenClass", "borderWhite");
      document.getElementById("gen2boxid").classList.add("slideGenClass", "borderWhite");
      document.getElementById("gen3boxid").classList.add("slideGenClass", "borderWhite");
      document.getElementById("gen4boxid").classList.add("slideGenClass", "borderWhite");
      document.getElementById("gen5boxid").classList.add("slideGenClass", "borderWhite");
      document.getElementById("gen6boxid").classList.add("slideGenClass", "borderWhite");
      document.getElementById("gen7boxid").classList.add("slideGenClass", "borderWhite");
      document.getElementById("gen8boxid").classList.add("slideGenClass", "borderWhite");
      setMenuOpen(true)
      document.getElementById("gen1id").classList.remove("hide");
      document.getElementById("gen2id").classList.remove("hide");
      document.getElementById("gen3id").classList.remove("hide");
      document.getElementById("gen4id").classList.remove("hide");
      document.getElementById("gen5id").classList.remove("hide");
      document.getElementById("gen6id").classList.remove("hide");
      document.getElementById("gen7id").classList.remove("hide");
      document.getElementById("gen8id").classList.remove("hide");

      document.getElementById("gen1id").classList.add("show");
      document.getElementById("gen2id").classList.add("show");
      document.getElementById("gen3id").classList.add("show");
      document.getElementById("gen4id").classList.add("show");
      document.getElementById("gen5id").classList.add("show");
      document.getElementById("gen6id").classList.add("show");
      document.getElementById("gen7id").classList.add("show");
      document.getElementById("gen8id").classList.add("show");


    } else {

      document.getElementById("gen1boxid").classList.remove("borderWhite");
      document.getElementById("gen2boxid").classList.remove("borderWhite");
      document.getElementById("gen3boxid").classList.remove("borderWhite");
      document.getElementById("gen4boxid").classList.remove("borderWhite");
      document.getElementById("gen3boxid").classList.remove("borderWhite");
      document.getElementById("gen5boxid").classList.remove("borderWhite");
      document.getElementById("gen6boxid").classList.remove("borderWhite");
      document.getElementById("gen7boxid").classList.remove("borderWhite");
      document.getElementById("gen8boxid").classList.remove("borderWhite");


      document.getElementById("gen1boxid").classList.add("slideGenClassUp");
      document.getElementById("gen2boxid").classList.add("slideGenClassUp");
      document.getElementById("gen3boxid").classList.add("slideGenClassUp");
      document.getElementById("gen4boxid").classList.add("slideGenClassUp");
      document.getElementById("gen5boxid").classList.add("slideGenClassUp");
      document.getElementById("gen6boxid").classList.add("slideGenClassUp");
      document.getElementById("gen7boxid").classList.add("slideGenClassUp");
      document.getElementById("gen8boxid").classList.add("slideGenClassUp");
      setMenuOpen(false)
      document.getElementById("gen1id").classList.add("hide");
      document.getElementById("gen2id").classList.add("hide");
      document.getElementById("gen3id").classList.add("hide");
      document.getElementById("gen4id").classList.add("hide");
      document.getElementById("gen5id").classList.add("hide");
      document.getElementById("gen6id").classList.add("hide");
      document.getElementById("gen7id").classList.add("hide");
      document.getElementById("gen8id").classList.add("hide");
    }
  }