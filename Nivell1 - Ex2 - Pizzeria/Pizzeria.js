db.createCollection('Client', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Cognoms', 'Adreça', 'Codi Postal', 'Telèfon', 'Localitat', 'Província'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Cognoms: {
          bsonType: 'string'
        },
        Adreça: {
          bsonType: 'string'
        },
        Codi Postal: {
          bsonType: 'int'
        },
        Telèfon: {
          bsonType: 'int'
        },
        Localitat: {
          bsonType: 'objectId'
        },
        Província: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Beguda', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Descripció', 'Imatge', 'Preu', 'Comanda'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Descripció: {
          bsonType: 'string'
        },
        Imatge: {
          bsonType: 'string'
        },
        Preu: {
          bsonType: 'string'
        },
        Comanda: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Localitat', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Província'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Província: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Comanda', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Data', 'Domicili', 'Preu Total', 'client', 'Botiga'],
      properties: {
        Data: {
          bsonType: 'date'
        },
        Domicili: {
          bsonType: 'bool'
        },
        Preu Total: {
          bsonType: 'double'
        },
        client: {
          bsonType: 'objectId'
        },
        Botiga: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Categoria pizzes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Tipus'],
      properties: {
        Tipus: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Pizzes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Descripció', 'Imatge', 'Preu', 'Comanda', 'Categoria pizzes'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Descripció: {
          bsonType: 'string'
        },
        Imatge: {
          bsonType: 'string'
        },
        Preu: {
          bsonType: 'double'
        },
        Comanda: {
          bsonType: 'objectId'
        },
        Categoria pizzes: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Hamburgueses', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Descripció', 'Imatge', 'Preu', 'Comanda'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Descripció: {
          bsonType: 'string'
        },
        Imatge: {
          bsonType: 'string'
        },
        Preu: {
          bsonType: 'string'
        },
        Comanda: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Província', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom'],
      properties: {
        Nom: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Botiga', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Adreça', 'Codi Postal', 'Localitat', 'Provincia'],
      properties: {
        Adreça: {
          bsonType: 'string'
        },
        Codi Postal: {
          bsonType: 'string'
        },
        Localitat: {
          bsonType: 'string'
        },
        Provincia: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Treballador', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Cognoms', 'NIF', 'Telèfon', 'Posició', 'Botiga'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Cognoms: {
          bsonType: 'string'
        },
        NIF: {
          bsonType: 'int'
        },
        Telèfon: {
          bsonType: 'int'
        },
        Posició: {
          bsonType: 'string'
        },
        Botiga: {
          bsonType: 'objectId'
        }
      }
    }
  }
});