db.createCollection('clients', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Telèfon', 'Atés', 'Data de registre', 'Email', 'Recomanat', 'Adreça'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Telèfon: {
          bsonType: 'int'
        },
        Atés: {
          bsonType: 'string'
        },
        Data de registre: {
          bsonType: 'date'
        },
        Email: {
          bsonType: 'date'
        },
        Recomanat: {
          bsonType: 'date'
        },
        Adreça: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('comandes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id_client', 'compra ulleres', 'id_treballador', 'data', 'clients', 'treballador', 'ulleres'],
      properties: {
        id_client: {
          bsonType: 'string'
        },
        compra ulleres: {
          bsonType: 'object'
        },
        id_treballador: {
          bsonType: 'object'
        },
        data: {
          bsonType: 'date'
        },
        clients: {
          bsonType: 'objectId'
        },
        treballador: {
          bsonType: 'objectId'
        },
        ulleres: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('proveïdor', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Nom', 'Adreça', 'Telèfon', 'Fax', 'NIF'],
      properties: {
        Nom: {
          bsonType: 'string'
        },
        Adreça: {
          bsonType: 'string'
        },
        Telèfon: {
          bsonType: 'int'
        },
        Fax: {
          bsonType: 'int'
        },
        NIF: {
          bsonType: 'int'
        }
      }
    }
  }
});
db.createCollection('treballador', {
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
db.createCollection('ulleres', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Marca', 'Graduació Esq', 'Graduació dret', 'Tipus de montura', 'Color de la Muntura', 'Color de vidre', 'Preu', 'proveïdor'],
      properties: {
        Marca: {
          bsonType: 'string'
        },
        Graduació Esq: {
          bsonType: 'string'
        },
        Graduació dret: {
          bsonType: 'string'
        },
        Tipus de montura: {
          bsonType: 'string'
        },
        Color de la Muntura: {
          bsonType: 'string'
        },
        Color de vidre: {
          bsonType: 'string'
        },
        Preu: {
          bsonType: 'string'
        },
        proveïdor: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Adreça', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['Carrer', 'Número', 'Pis', 'Porta', 'Ciutat', 'Codi Postal', 'País'],
      properties: {
        Carrer: {
          bsonType: 'string'
        },
        Número: {
          bsonType: 'string'
        },
        Pis: {
          bsonType: 'string'
        },
        Porta: {
          bsonType: 'string'
        },
        Ciutat: {
          bsonType: 'string'
        },
        Codi Postal: {
          bsonType: 'string'
        },
        País: {
          bsonType: 'string'
        }
      }
    }
  }
});