function status(request, response) {
  response.status(200).json({ chave: "O melhor grupo de poker da baixada" });
}

export default status;
