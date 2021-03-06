package back.coolsrv.enities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vlan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @OneToMany
    private List<Device> deviceList;

    private String desc;

    public Vlan(String name, List<Device> deviceList, String desc) {
        this.name = name;
        this.deviceList = deviceList;
        this.desc = desc;
    }
}
