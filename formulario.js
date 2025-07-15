const lista = [];

        function enviarFormulario() {
            if (!validar()) return;
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const fono = document.getElementById('fono').value;
            const msj = document.getElementById('msj').value;
            
            const fila = {
                nombre: nombre,
                email: email,
                fono: fono,
                msj: msj
            };
            
            lista.push(fila);
            mostrarTabla();
            limpiar();
        }

        const validar = () => {
            let esValido = true;
            document.querySelectorAll('.form-control').forEach(fila => {
                if(fila.value == '') {
                    fila.classList.remove('is-valid');
                    fila.classList.add('is-invalid');
                    esValido = false;
                } else {
                    fila.classList.remove('is-invalid');
                    fila.classList.add('is-valid');
                }
            });
            return esValido;
        }

        const mostrarTabla = () => {
            const tbody = document.getElementById('tablaContactos');
            tbody.innerHTML = '';
            lista.forEach((contacto, index) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${contacto.nombre}</td>
                    <td>${contacto.email}</td>
                    <td>${contacto.fono}</td>
                    <td>${contacto.msj}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">Eliminar</button>
                    </td>
                `;
                tbody.appendChild(fila);
            });
        }

        function eliminar(index) {
            lista.splice(index, 1);
            mostrarTabla();
        }

        const limpiar = () => {
            document.querySelectorAll('.form-control').forEach(fila => {
                fila.value = '';
                fila.classList.remove('is-valid', 'is-invalid');
            });
        }